export const dynamic = 'force-dynamic'
export const fetchCache = 'only-no-store'


export async function GET(request) {

    const { searchParams } = new URL(request.url)
    const list = searchParams.get('list')

    const res = await fetch(`http://localhost:8080/${list}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
   
    return Response.json({ data })
  }