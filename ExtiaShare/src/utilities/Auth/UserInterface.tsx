// create interface for HTTP response (user) :

export interface User {

    userID: number,
    userNFCID: Array<number>,
    userMail: String,
    score: number,
    company: {
        name: String
    }
}

/* 

{
  "id": Long,
  "idNFC": [],
  "mailAddress": String,
  "logo": String(url),
  "score": int,
  "company": {
    "name": String
  }
}

*/