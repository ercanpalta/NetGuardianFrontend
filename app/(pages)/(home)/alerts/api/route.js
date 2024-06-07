export const dynamic = 'force-dynamic'
export const fetchCache = 'only-no-store'

export async function GET() {
    const res = await fetch('http://localhost:8080/alerts', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
   
    return Response.json({ data })
  }