(function Get_looser() {
    this.volunteer_array = [];

    this.init = function() {
        this.add_volunteer();
    };

    this.add_volunteer = function() {
        
        function generate_list(input) {
            var value = input.value;

            if (this.check_valid(value)) {
                volunteer_array.push(value);
                input.value = '';
            } else if(value === '') {
                alert('You must enter an name');
                input.value = '';
            } else {
                alert('You cann\'t have two volunteer with same name');
                input.value = '';
            }

            console.log(volunteer_array);
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

    this.init();
})();