export async function POST(request) {

    const { searchParams } = new URL(request.url)
    const list = searchParams.get('list')
    const id = searchParams.get('id')

    const res = await fetch(`http://localhost:8080/alerts/${id}?add=${list}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
   
    const data = await res.json()
   
    return Response.json(data)
  }