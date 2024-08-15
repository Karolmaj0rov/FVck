let names = [`Jasur`, `Ali`, `Yusuf`, `Behruz`, `Gafur`, `Nurmuhammad`, `Muhammaddavron`, `Muhammad`, `Imron`,]

let searchText = prompt(`Qidiradigan ismingizni kiriting`)


if (names.includes(searchText)) {
    alert(names[names.indexOf(searchText)])
} else {
    alert(`hoy ukam bunday ism contactda yo'q sirpan bu yerdan`)    
}