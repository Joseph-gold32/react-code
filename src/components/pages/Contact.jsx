import { useState, useEffect } from "react";
import Button from "../Button";

export const Contact = () => {
   const [country, setCountry] = useState("")
   const [weatherData, setWeatherData] = useState(null)
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState("")
   const [searchTrigger, setSearchTrigger] = useState(0)

   useEffect(() => {
      if (!searchTrigger) return
    
      
      const trimmed = country.trim()
      if (!trimmed) {
        //  setError("Please enter a country name")
        //  setWeatherData(null)
         setLoading(false)
         returnzzzzzzz
      }

      const fetchWeather = async () => {
         setLoading(true)
         setError("")
         setWeatherData(null)
         try {
            const res = await fetch(`https://wttr.in/${encodeURIComponent(trimmed)}?format=j1`)
            if (!res.ok) throw new Error("Country not found")
            const data = await res.json()
            setWeatherData(data)
         } catch (err) {
            setError(err.message || "Failed to fetch weather data")
         } finally {
            setLoading(false)
         }
      }

      fetchWeather()
   }, [searchTrigger])

   const handleSearch = () => {
      setSearchTrigger((prev) => prev + 1)
   }

   const current = weatherData?.current_condition?.[0]

    return(
        <div className="sidebar-container">
            <div className="sidebar-content" style={{marginBottom:"30px"}}>
                <h1 style={{color: "red"}}>WEATHER APP</h1>
                <p style={{color: "blue"}}><marquee behavior="" direction=""> Welcome To My Weather App</marquee></p>

                <div style={{marginTop:"30px", borderTop:"2px solid #792222", paddingTop:"30px"}}>
                    <h2>🌤 Weather App</h2>
                    <div style={{display:"flex", gap:"10px", marginTop:"15px", alignItems:"center"}}>
                        <input 
                            type="text"
                            color="blue"
                            placeholder="Enter a country..." 
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                            style={{
                                padding:"12px 16px",
                                fontSize:"16px",
                                border:"1px solid #ccc",
                                color:"whitesmoke",
                                borderRadius:"6px",
                                flex:1,
                                outline:"none"
                            }}
                        />
                        <Button 
                            text={loading ? "Loading..." : "Get Weather"} 
                            bg="#0b0653" 
                            color="white"
                            borderRadius="20px"
                            border="none"
                             
                            pad="12px 24px" 
                            click={handleSearch}
                        />
                    </div>

                    {error && (
                        <p style={{color:"red", marginTop:"12px"}}>{error}</p>
                    )}

                    {loading && (
                        <p style={{marginTop:"12px", color:"#555"}}>Fetching weather data...</p>
                    )}

                    {current && (
                        <div style={{
                            marginTop:"25px", 
                            padding:"20px", 
                            background:"#f0f8ff", 
                            borderRadius:"10px",
                            border:"1px solid #b3d8f0"
                        }}>
                            <h3 style={{margin:0, fontSize:"22px"}}>
                                {weatherData?.nearest_area?.[0]?.areaName?.[0]?.value || country}
                            </h3>
                            <div style={{display:"flex", alignItems:"center", gap:"15px", marginTop:"12px"}}>
                                <span style={{fontSize:"48px"}}>{current.weatherDesc?.[0]?.value?.includes("sun") ? "☀️" : current.weatherDesc?.[0]?.value?.includes("cloud") ? "☁️" : current.weatherDesc?.[0]?.value?.includes("rain") ? "🌧" : "🌤"}</span>
                                <div>
                                    <p style={{fontSize:"36px", fontWeight:"bold", margin:0}}>{current.temp_C}°C</p>
                                    <p style={{margin:0, color:"#555"}}>{current.weatherDesc?.[0]?.value || "N/A"}</p>
                                </div>
                            </div>
                            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginTop:"15px"}}>
                                <div><strong>Feels like:</strong> {current.FeelsLikeC}°C</div>
                                <div><strong>Humidity:</strong> {current.humidity}%</div>
                                <div><strong>Wind:</strong> {current.windspeedKmph} km/h</div>
                                <div><strong>Pressure:</strong> {current.pressure} mb</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
