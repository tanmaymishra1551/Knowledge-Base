 <!-- <input type="text" id="searchInput" data-input>
    <script>
        searchedItem = document.getElementById('searchInput');
        searchedItem.addEventListener('input', (e)=>{
            console.log(e.target.value);
        })
    </script> -->
*The data-input attribute is a custom attribute that doesn't affect the functionality directly but can be used for data storage or querying purposes in JavaScript.
*The callback function (e) => { ... } runs each time the event is triggered. The e parameter represents the event object.
*e.target refers to the element that triggered the event (searchedItem in this case).

*textContent: Best for getting or setting the complete text content of an element, regardless of its visibility.
*innerText: Best for getting or setting only the visible text of an element.
*.value: Specifically used for form elements to get or set their input values.
Does not apply to regular HTML elements like <div>, <p>, etc.