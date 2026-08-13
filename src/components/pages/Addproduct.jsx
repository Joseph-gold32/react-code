import { useForm } from "react-hook-form"
import "./AddProduct.css"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

export const AddProduct = () => {
    const productSchema = z.object({
        title: z.string().min(1, "Title is required").min(3, "Title must be greater than 3 character").max(30, "Title must not be greater than 30 character").trim(),
        description: z.string().min(1, "Description is required").min(3, "Description must be greater than 3 character").max(120, "Description must not be greater than 30 character").trim(),
        price: z.coerce.number("Price must be a number").min(100, "Price must me at least 100"),
        category: z.enum(["electronics", "fashion", "home", "beauty", "other"], {
            errorMap: (issue, ctx) => {
                if (issue.code === z.ZodIssueCode.invalid_enum_value) {
                    return { message: "Category is required" };
                }
                return { message: ctx.defaultError };
            },
        }),
        currency: z.enum(["NGN", "USD", "EUR", "GBP"], {
            errorMap: (issue, ctx) => {
                if (issue.code === z.ZodIssueCode.invalid_enum_value) {
                    return { message: "currency is required" };
                }
                return { message: ctx.defaultError };
            },
        }),
    })
    const { handleSubmit, register, reset, formState: { errors } } = useForm({ resolver: zodResolver(productSchema) })

    const onSubmit = (data) => {
        console.log("The input data", data);
        reset()
    }
    console.log("The error", errors);

    return (
        <main className="add-product">
            <form className="product-form-panel product-form" onSubmit={handleSubmit(onSubmit)} >
                <div className="form-field form-field-full">
                    <label htmlFor="title">Title</label>
                    <input {...register("title")} id="title" name="title" type="text" placeholder="Product title" />
                    {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}
                </div>

                <div className="form-field form-field-full">
                    <label htmlFor="description">Description</label>
                    <textarea {...register("description")} id="description" name="description" rows="5" placeholder="Describe your product" />
                    {errors.description && <p style={{ color: "red" }}>{errors.description.message}</p>}
                </div>

                <div className="form-field">
                    <label htmlFor="price">Price</label>
                    <input {...register("price")} id="price" name="price" type="number" placeholder="0.00" />
                    {errors.price && <p style={{ color: "red" }}>{errors.price.message}</p>}
                </div>

                <div className="form-field">
                    <label htmlFor="category">Category</label>
                    <select {...register("category")} id="category" name="category" defaultValue="">
                        <option value="" disabled>Select category</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                        <option value="home">Home</option>
                        <option value="beauty">Beauty</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.category && <p style={{ color: "red" }}>{errors.category.message}</p>}
                </div>

                <div className="form-field">
                    <label htmlFor="currency">Currency</label>
                    <select {...register("currency")} id="currency" name="currency" defaultValue="">
                        <option value="" disabled>Select currency</option>
                        <option value="NGN">NGN</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                    {errors.currency && <p style={{ color: "red" }}>{errors.currency.message}</p>}
                </div>

                <div className="form-field">
                    <label htmlFor="image">Image</label>
                    <input {...register("image")} id="image" name="image" type="url" placeholder="Image URL" />
                    {errors.image && <p style={{ color: "red" }}>{errors.image.message}</p>}
                </div>
                <button>Submit</button>
            </form>
        </main>
    )
}