(function Get_looser() {
    this.volunteer_array = [];

    this.init = function() {
        this.add_volunteer();
    };

    this.add_volunteer = function() {
        
        function generate_list(input) {
            var value = input.value;

            if (this.check_valid(value.toLowerCase())) {
                volunteer_array.push(value.toLowerCase());
                input.value = '';
                show_list();
            } else if(value === '') {
                alert('You must enter an name');
                input.value = '';
            } else {
                alert('You cann\'t have two volunteer with same name');
                input.value = '';
            }

            console.log(volunteer_array);
        };// generate_list END

        function show_list() {
            var el_parent = document.querySelector('.applicant_list_wrapper');
            var output = '';

            for (let i = 0; i < volunteer_array.length; i++) {
                output += `<span class="name_tag" data-id=""> ${volunteer_array[i]}</span>`;
            }

            el_parent.innerHTML = '';
            el_parent.insertAdjacentHTML('afterbegin', output);

        };// show_list END

        var add_btn = document.querySelector('#add_applicant');
        add_btn.addEventListener('click',function() {
            var input = document.querySelector('#applicant_input');
            generate_list(input);  
        });
    };// add_volunteer END

    this.check_valid = function(value) {
        if (volunteer_array.indexOf(value) < 0 && value != '') {
            return true;
        }
        return false;
    };// check_valid END

    this.init();
})();