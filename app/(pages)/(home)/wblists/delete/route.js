export async function DELETE(request) {

    const { searchParams } = new URL(request.url)
    const list = searchParams.get('list')
    const id = searchParams.get('id')

    const res = await fetch(`http://localhost:8080/${list}/${id}`, {
      method: 'DELETE',
    })
    const data = await res
   
    return Response.json({ data })
  }