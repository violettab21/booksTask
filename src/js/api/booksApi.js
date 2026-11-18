export async function searchBook(searchTerm) {
  const apiURL = `https://openlibrary.org/search.json?q=${searchTerm}`;
  try {
    const booksResponse = await fetch(apiURL);
    if (!booksResponse.ok) {
      throw new Error("Error on search");
    }
    const booksData = await booksResponse.json();
    const books = booksData.docs;
    return books;
  } catch (err) {
    throw new Error(err.message);
  }
}
