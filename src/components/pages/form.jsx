import { useState } from "react"

export const ProductForm = () => {
  const [form, setForm] = useState({
    price: "",
    category: "",
    description: "",
    imageUrl: "",
  })

const [products, setProducts] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.price || !form.category || !form.description || !form.imageUrl) {
      alert("Please fill in all fields")
      return
    }

    const payload = {
      price: Number(form.price),
      category: form.category,
      description: form.description,
      imageUrl: form.imageUrl,
    }

    setSending(true)
    try {
const response = await fetch("/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const savedProduct = await response.json()

      if (editingId !== null) {
        setProducts((prev) =>
          prev.map((p) => (p.id === editingId ? { ...savedProduct, ...payload } : p))
        )
        setEditingId(null)
      } else {
        setProducts((prev) => [savedProduct, ...prev])
      }

      setForm({ price: "", category: "", description: "", imageUrl: "" })
      alert("Product saved successfully!")
    } catch (err) {
      alert(`Failed to save product: ${err.message}`)
    } finally {
      setSending(false)
    }
  }

  const handleEdit = (product) => {
    setEditingId(product.id)
    setForm({
      price: String(product.price),
      category: product.category,
      description: product.description,
      imageUrl: product.imageUrl,
    })
  }

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    border: "1px solid #cbd5e1",
    borderRadius: "10px",
    fontSize: "15px",
    fontFamily: "inherit",
    boxSizing: "border-box",
    color: "#101010",
    background: "#fff",
  }

  const labelStyle = {
    display: "block",
    marginBottom: "6px",
    fontWeight: "700",
    fontSize: "14px",
    color: "#03071f",
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "36px auto",
        padding: "10px 20px",
        fontFamily: "Poppins, Segoe UI, Arial, sans-serif",
        color: "blue"
      }}
    >
      <h2 style={{ color: "#139e48", fontSize: "28px", marginBottom: "6px" }}>
        Add Product
      </h2>
      <p style={{ color: "white", margin: "0 0 24px" }}>
        <marquee behavior="" direction="">Welocome To Golden Store kindly fill in the details</marquee>
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 18px 40px rgba(15, 23, 42, 0.08)",
          padding: "28px",
          display: "grid",
          gap: "18px",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }}>
          <div>
            <label style={labelStyle}>Price ($)</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="e.g. 99.99"
              style={inputStyle}
              min="0"
              step="0.01"
            />
          </div>
          <div>
            <label style={labelStyle}>Category</label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="e.g. Electronics"
              style={inputStyle}
            />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe the product..."
            rows={3}
            style={{ ...inputStyle, resize: "vertical" }}
          />
        </div>

        <div>
          <label style={labelStyle}>Image URL</label>
          <input
            type="url"
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            placeholder="https://joseph.com/image.jpg"
            style={inputStyle}
          />
        </div>

        {form.imageUrl && (
          <div style={{ textAlign: "center" }}>
            <p style={{ margin: "0 0 8px", fontSize: "13px", color: "#6b6375" }}>
              Preview:
            </p>
            <img
              src={form.imageUrl}
              alt="Preview"
              onError={(e) => {
                e.currentTarget.style.display = "none"
              }}
              onLoad={(e) => {
                e.currentTarget.style.display = "block"
              }}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "contain",
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
                padding: "8px",
                background: "#f8fafc",
              }}
            />
          </div>
        )}

<button
          type="submit"
          disabled={sending}
          style={{
            padding: "14px 22px",
            background: sending ? "#94a3b8" : "#062894",
            color: "#ffffff",
            border: "none",
            borderRadius: "12px",
            cursor: sending ? "not-allowed" : "pointer",
            fontWeight: "700",
            fontSize: "16px",
            transition: "background 0.2s",
            opacity: sending ? 0.8 : 1,
          }}
          onMouseEnter={(e) => {
            if (!sending) e.currentTarget.style.background = "#0a3bd6"
          }}
          onMouseLeave={(e) => {
            if (!sending) e.currentTarget.style.background = "#062894"
          }}
        >
          {sending ? "Saving..." : editingId !== null ? "Update Product" : "Add Product"}
        </button>
      </form>

      {products.length > 0 && (
        <div style={{ marginTop: "36px" }}>
          <h3 style={{ color: "#03071f", fontSize: "22px", marginBottom: "16px" }}>
            Products ({products.length})
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: "14px",
                  padding: "16px",
                  background: "#ffffff",
                  boxShadow: "0 6px 16px rgba(15,23,42,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={product.imageUrl}
                  alt={product.category}
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><rect width='100%25' height='100%25' fill='%23eef0ff'/><text x='50%25' y='50%25' fill='%236b6375' font-size='14' text-anchor='middle' dominant-baseline='middle'>No image</text></svg>"
                  }}
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "contain",
                    marginBottom: "12px",
                  }}
                />
                <span
                  style={{
                    background: "#eef0ff",
                    color: "#062894",
                    fontSize: "12px",
                    fontWeight: "700",
                    padding: "4px 12px",
                    borderRadius: "999px",
                    marginBottom: "8px",
                  }}
                >
                  {product.category}
                </span>
                <p style={{ fontWeight: "800", color: "#03071f", fontSize: "18px", margin: "0 0 6px" }}>
                  ${product.price.toFixed(2)}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#6b6375",
                    textAlign: "center",
                    margin: "0 0 14px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {product.description}
                </p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={() => handleEdit(product)}
                    style={{
                      padding: "8px 16px",
                      background: "#eef0ff",
                      color: "#062894",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontWeight: "700",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    style={{
                      padding: "8px 16px",
                      background: "#dc2626",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontWeight: "700",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
