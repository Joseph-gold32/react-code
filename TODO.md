<!-- # TODO - Product Backend Integration

## Steps:
- [x] Step 1: Create `server.js` - Express backend on port 4001
  - GET /products -> list all products
  - POST /products -> add a new product
  - Stores products in `db.json`
- [x] Step 2: Update `package.json` - add `express` dependency + `start:server` script
- [x] Step 3: Install dependencies (`npm install`)
- [x] Step 4: Run the backend (`npm run start:server`) - running at http://localhost:4001
- [x] Step 5: Test POST /products (verified via PowerShell - product saved to db.json)
- [x] Step 6: Run Vite dev server (`npm run dev`) and use the form

## How to test
1. Start backend:
   ```
   npm run start:server
   ```
2. In Postman:
   - `POST http://localhost:4001/products`
   - Body (JSON):
     ```json
     {
       "price": 99.99,
       "category": "Electronics",
       "description": "Test product from Postman",
       "imageUrl": "https://example.com/image.jpg"
     }
     ```
   - `GET http://localhost:4001/products` to view saved products
3. Start the React app:
   ```
   npm run dev
   ```
4. Open `/form` in the browser and submit the product form.
 -->
