export async function PATCH(request) {

    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')
    const newPassword = searchParams.get('newPassword')
    const oldPassword = searchParams.get('oldPassword')

    const res = await fetch('http://localhost:8080/users/changepassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: email, newPassword : newPassword, oldPassword : oldPassword}),
    })
   
    const data = await res.json()
   
    return Response.json(data)
  }