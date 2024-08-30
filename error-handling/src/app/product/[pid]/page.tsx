
import { Product } from "@/app/lib/defination";
import { fetchProduct } from "@/app/lib/productLib";

export default async function ProductPage({
    params,
}: {
    params: { pid: string };
}) {
    const pid = parseInt(params.pid);
    const product: Product | undefined = fetchProduct(pid);
    return (
        <div>
            <table>
                <tr>
                    <th>ProductId</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>

                <tr>
                    <td>{product!.productId}</td>
                    <td>{product!.name}</td>
                    <td>{product!.price}</td>
                    <td>{product!.description}</td>
                </tr>

            </table>
        </div>
    );
}


