export async function POST(request) {

    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')
    const password = searchParams.get('password')

    const res = await fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: email, password : password}),
    })
   
    const data = await res.json()
   
    return Response.json(data)
  }