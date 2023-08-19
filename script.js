
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const web=formData.get("web");
    const gender = formData.get("gender");
     const skillsArray = [];
    formData.getAll("skills").forEach(skill => {
        skillsArray.push(skill);
    });
    const skills = skillsArray.length > 0 ? skillsArray.join(", ") : "N/A";
   const defaultImage = "danish.jfif";
       const imageLink = formData.get("imageLink");
    const newOutputBlock = document.createElement("div");
    newOutputBlock.className = "output-block"; // Apply CSS class if needed
    newOutputBlock.innerHTML = `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Website: ${web}</p>
        <p>Gender: ${gender || "N/A"}</p>
        <p>Skills: ${skills}</p>
         <p>Image:</p>
    <img src="${defaultImage}" alt="Image from Link" style="max-width: 100%; width: 300px; height: auto;">
      
    `;
       const newOutput = `
        <div class="output-block">
            <!-- ... (output content) ... -->
        </div>
    `;
    // Append new block to the output div
    const outputDiv = document.getElementById("output");
    outputDiv.appendChild(newOutputBlock);

    // Clear form inputs
    event.target.reset();
});
