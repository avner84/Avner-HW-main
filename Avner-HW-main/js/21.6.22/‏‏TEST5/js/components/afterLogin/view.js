const afterLoginDiv = document.querySelector("#afterLogin");


export function showUI(user) {
    afterLoginDiv.innerHTML = `<h3>Hye ${user.Table[0].first_name} ${user.Table[0].last_name}, You are connected.</h3>`;
    afterLoginDiv.innerHTML+= `<table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">User Name</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Role</th>
        <th scope="col">Password</th>
        <th scope="col">Options</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">${user.Table[0].id}</th>
        <td> ${user.Table[0].username}</td>
        <td>${user.Table[0].first_name}</td>
        <td>${user.Table[0].last_name}</td>
        <td>${user.Table[0].role}</td>
        <td>${user.Table[0].password}</td>
        <td><i class="fa-solid fa-pen-to-square"></i> <i class="fa-solid fa-trash-can"></i></td>
      </tr>
    </tbody>
  </table>`;
    $("#keyboardDiv").fadeOut(500);
         
     $("#afterLogin").delay(500).fadeIn(800);
}