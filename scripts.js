let booklet = [
    {
        title: 'Return of the king',
        author: 'Oliver',
        year: 1978,
        isBorrowed: true,
        isLate: false
    },
    {
        title: 'Harry Potter',
        author: 'J.K Rowling',
        year: 2001,
        isBorrowed: false,
        isLate: false
    },
    {
        title: 'Star Wars',
        author: 'Arwa',
        year: 2002,
        isBorrowed: true,
        isLate: true
    },
    {
        title: 'Lord of the Rings',
        author: 'Lasith',
        year: 2008,
        isBorrowed: true,
        isLate: false
    },
    {
        title: 'Goosebumps',
        author: 'R.L Stine',
        year: 2009,
        isBorrowed: true,
        isLate: false
    }
]

for (book of booklet) {
    // if(book.isBorrowed === true){
    //     console.log(`The Book name is ${book.title}  and is written by  ${book.author} has been borrowed by the library`);
    //     if(book.isLate === true){
    //         console.log(`This Book ${book.title} by  ${book.author} is late`);
    //     }
    // }

    if(book.isBorrowed === true && book.isLate === true){
        console.log(`The Book  ${book.title} ,written by ${book.author} has been borrowed and is given late`);
    }
  }

