import { Sidebar } from "../Sidebar"
import Button from "../Button";


export const About = () => {
    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZbFsWxw07zxaf2Z3zCye44kC-dRSLj5SN8ctRWIOkdw&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBCsOHHRbmZ0Wh1OzyluzgznfpX_oZ23feyWYWHVSH0JIpmgIcbxp_hoE&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTcUJaoV5yakHfTcKvtism_ifd-3HOs-l2wG2C1pqbZw&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqA28y7O_3aqUy6Iww94HHF5ghU8uAx4lAu6T-gw0bBw&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrfhp3bN645hDUBHmku51gJl19519IX4GVhbLYMfN2Mw&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ThVUwvaWUtFQouJ7AyXyKwEYUT45_RFsnM0YAgTL-A&s=10",
    ]

    return (
        <div className="sidebar-container">
            <Sidebar />
            <div className="sidebar-content" style={{ background: "#000000", color: "#ffffff" }}>
                <h1 style={{fontSize:"20px", color:"yellow"}}>WELCOME TO CHRISTIANO RONALDO STORY</h1>
                <Button text="download" bg="blue" color="white" />
                <p>Cristiano Ronaldo. 

The Greatest Of All Time. 
    The Standard. The Final Boss of Football.

Built different. Built to last. 
From Madeira to Mount Olympus. 

5x UCL. 5x Ballon d’Or. 
But the numbers don’t even tell the full story.

Discipline. Mentality. Hard work. 
He turned pressure into records and records into history.

Aging like fine wine. Playing like a machine. 
While others chase greatness, he became it.

Longevity. Consistency. Legacy. 
The name alone is history.

SIUUUUUUUUUUUU. 🐐</p>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "20px",
                    marginTop: "30px"
                }}>
                    {images.map((src, i) => (
                        <div key={i} style={{
                            borderRadius: "12px",
                            overflow: "hidden",
                            border: "2px solid #333",
                            transition: "transform 0.3s ease"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
                        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                        >
                            <img
                                src={src}
                                alt={`About image ${i + 1}`}
                                style={{
                                    width: "100%",
                                    height: "250px",
                                    objectFit: "cover",
                                    display: "block"
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
