//Buscando e contando dados em array

const booksByCategory = [
    {
        titleOfCategory: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
            {
                title: "O guia de investimentos: aprenda a ganhar dinheiro investindo como os ricos",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        titleOfCategory: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Steven R. Covey",
            },
        ],
    },
];


const totalCategories = booksByCategory.length;

console.log(totalCategories); //2
for (let category of booksByCategory) {
    console.log("Total de livors da categoria: :", category.titleOfCategory)
    console.log(category.books.length)
}


function countAuthors() {
    let authors = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log("Total de autores: ", authors.length)
}

countAuthors();

function booksOfAuthor(author) {
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('Augusto Cury');








// let authorsAux = []

// for (let category of booksByCategory) {
//     for (let books of category.books) {
//         console.log(books.author)
//         let isToAdd = true;
//         for (let authorAux of authorsAux) {
//             if (books.author === authorAux) {
//                 isToAdd = false
//             }
//         }
//         if (isToAdd) {
//             authorsAux.push(books.author);
//         }

//     }
// }

// for (let category in booksByCategory) {
//     for (let books in category.books) {
//         console.log(books)
//         for (let author of books) {
//             if (books.author === "Augusto Cury") {
//                 console.log(books.title)
//             }
//         }

//     }
// }

// console.log(authorsAux)









// let i = totalCategories;
// for (i; i > 0; i--) {
//     let category = booksByCategory[i];
// }

// for (let i = 0; i < totalCategories; i++) {
//     let category = booksByCategory[i];
//     console.log("Category:", category);
// }
