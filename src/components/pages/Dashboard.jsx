import { useState, useEffect } from "react"

export const Dashboard = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setProducts(data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px", fontSize: "1.5rem" }}>
        Loading products...
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "50px", color: "red", fontSize: "1.5rem" }}>
        Error: {error}
      </div>
    )
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Products Dashboard</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ fontSize: "1rem", marginBottom: "5px", textAlign: "center" }}>
              {product.title}
            </h3>
            <p style={{ fontWeight: "bold", color: "#2c7a2c", marginBottom: "5px" }}>
              ${product.price.toFixed(2)}
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                color: "#555",
                textAlign: "center",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}
            >
              {product.description}
            </p>
            <div style={{ marginTop: "10px", fontSize: "0.8rem", color: "#888" }}>
              ⭐ {product.rating.rate} ({product.rating.count} reviews)
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}