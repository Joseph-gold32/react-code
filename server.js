import express from "express"
import cors from "cors"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 4001

/
app.use(cors())
app.use(express.json())

const DB_FILE = path.join(__dirname, "db.json")


  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify([], null, 2))
    // return []
  }
  try {
    const raw = fs.readFileSync(DB_FILE, "utf-8")
    const data = JSON.parse(raw)
    return Array.isArray(data) ? data : []
  } catch (err) {
    console.error("Error reading db.json:", err.message)
    return []
  }
}

// Helper to write products to db.json
const writeProducts = (products) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(products, null, 2))
}

// GET /products -> list all products (view in Postman / browser)
app.get("/products", (req, res) => {
  const products = readProducts()
  res.json(products)
})


app.post("/products", (req, res) => {
  const { price, category, description, imageUrl } = req.body

 
  if (price === undefined || !category || !description || !imageUrl) {
    return res
      .status(400)
      .json({ message: "All fields (price, category, description, imageUrl) are required" })
  }

  const products = readProducts()
  const newProduct = {
    id: Date.now().toString(),
    price: Number(price),
    category,
    description,
    imageUrl,
    createdAt: new Date().toISOString(),
  }

  products.unshift(newProduct)
  writeProducts(products)

  res.status(201).json(newProduct)
})

app.listen(PORT, () => {
  console.log(`✅ Product backend running at http://localhost:${PORT}`)
  console.log(`   GET /products  -> view products in Postman`)
  console.log(`   POST /products -> add a product`)
})

