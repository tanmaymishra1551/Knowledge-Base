 <!-- <input type="text" id="searchInput" data-input>
    <script>
        searchedItem = document.getElementById('searchInput');
        searchedItem.addEventListener('input', (e)=>{
            console.log(e.target.value);
        })
    </script> -->
The data-input attribute is a custom attribute that doesn't affect the functionality directly but can be used for data storage or querying purposes in JavaScript.
The callback function (e) => { ... } runs each time the event is triggered. The e parameter represents the event object.
e.target refers to the element that triggered the event (searchedItem in this case).
