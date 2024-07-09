// static site generation
export default async function Home() {

    const response = await fetch("https://sum-server.100xdevs.com/todos", {
        next: {
            revalidate: 10
        }
    });
    const data = await response.json();
    console.log(JSON.stringify(data));

  return (
        <div>
            {data.todos.map((todo: any)  => (
                <div key={todo.id}>
                    {todo.title}
                    {todo.description}
                </div>
            ))}
        </div>
  );
}
