(function Get_looser() {
    this.volunteer_array = [];

    this.init = function() {
        this.add_volunteer();
    };

    this.show_list = function() {
        var el_parent = document.querySelector('.applicant_list_wrapper');
        var output = '';

        for (let i = 0; i < volunteer_array.length; i++) {
            output += `<span class="name_tag" data-id="${i}"> ${volunteer_array[i]}</span>`;
        }

        el_parent.innerHTML = '';
        el_parent.insertAdjacentHTML('afterbegin', output);
        // call the delete function
        delete_volunteer();
    };// show_list END

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
        };// generate_list END

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

    this.delete_volunteer = function() {
        var el_item = document.querySelectorAll('.name_tag');

        function remove_it(element) {
            var data_attr = parseInt(element.getAttribute('data-id'));
            volunteer_array.splice(data_attr, 1);

            // call the show list function
            show_list();
        };

        for (let i = 0; i < el_item.length; i++) {
            el_item[i].addEventListener('click', function(e) {
                remove_it(this);
            });  
        };
    };// delete_volunteer END

    this.random_user = function() {
        var show_results = document.querySelector('#show_results');

        show_results.addEventListener('click', function() {
            if (volunteer_array > 1) {
                
            }
        });
        
    };// random_user END

    this.init();
})();