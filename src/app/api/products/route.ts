
export function GET(request: Request) {
    const products = [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" },
    ]
    return Response.json({message: "get request success", products});
}