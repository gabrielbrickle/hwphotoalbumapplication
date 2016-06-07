var photoTemplate = {
  coverphotos:
        `
        <div class="album" data-id="<%=id%>" >
        <img src= "<%=cover%>" >
        <h3> <%=title%> </h3>
        </div>
      `,

  albumphotos:
      `
        <div class="photo">
        <img src= "<%= photo %>" >
        <h3> <%=caption %></h3>
        </div>
      `
}
