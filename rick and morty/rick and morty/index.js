function getCharaters(done) {
    const results = fetch("https://rickandmortyapi.com/api/character");
    results
        .then(Response => Response.json())
        .then(data => {
            done(data)
        });
}
getCharaters(data => {
    data.results.ForEach(persoajaes => {
        const article = document.createRange().createContextualFragment(/*html*/`
           <article>
            <div class="image-container">
                <img src="https://rickandmortyapi.com/api/character/avatar/663.jpeg" alt="pérsonaje">
            </div>
            <h2>personajes</h2>
            <span>Estado de personajes</span>
        </article>

        `);
    });
});



