export const dynamic = 'force-dynamic'
export const fetchCache = 'only-no-store'

export async function POST(request) {

    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')
    const fullName = searchParams.get('fullName')
    const password = searchParams.get('password')

    const res = await fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: email, fullName : fullName, password : password}),
    })
   
    const data = await res.json()
   
    return Response.json(data)
  }