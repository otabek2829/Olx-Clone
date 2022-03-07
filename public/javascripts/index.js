window.addEventListener('load', function () {



    //  Alert FadeOut
    const sms = setTimeout(msg, 2000)
    function msg() {
        $('.alert').fadeOut('slow')
    }


    //Show And hide Password
    let password = $('#password')
    let open = $('.open')
    let close = $('.close').css('display', 'none')
    open.click(() => {
        password.attr('type', 'text');
        open.css('display', 'none');
        close.css('display', 'block');
    })
    close.click(() => {
        password.attr('type', 'password');
        close.css('display', 'none');
        open.css('display', 'block');
    })

    //More Btn ONclick spiner show hide
    moreBtnSpinner = () => {
        let moreBtn = document.querySelectorAll('#index .btn-more');
        for (let i = 0; i < moreBtn.length; i++) {
            moreBtn[i].onclick = () => {
                let test = moreBtn[i].innerHTML = "Loading..."
            }
        }
    }
    moreBtnSpinner()

    // Loading Text Update
    loadingText = () => {
        let signUp = document.querySelectorAll('.loadText')
        for (let i = 0; i < signUp.length; i++) {
            signUp[i].onclick = () => {
                let test = signUp[i].innerHTML = "Loading..."
            }
        }
    }
    loadingText()


    // Filter 

    let product = document.querySelectorAll('#index .card h4');
    let card = document.querySelectorAll('#index .wrapper');
    let inp = document.querySelector('#search-page  .search-inp input');


    // Input Xodisasi ishlavotti
    inp.addEventListener('input', search)




    function search() {
        BtnShow()

        let product_item = document.querySelector('#index .product_item');
        let spinner = document.querySelector('#index .spinner-border');
        product_item.classList.add('hide')
        spinner.classList.add('show')
        setTimeout(spinnerLoad, 700)


        for (let i = 0; i < product.length; i++) {
            let prName = product[i].innerText.toLowerCase()
            let inpt = this.value.toLowerCase()
            if (prName.indexOf(inpt) !== -1) {
                card[i].classList.remove('hide')
            }
            else {
                card[i].classList.add('hide')
            }
        }
    }

    // Clear Button Show && Hide
    let clearBtn = document.querySelector('#search-page .search-header .clear');
    function BtnShow() {
        if (inp.value !== '') {
            clearBtn.classList.add('show')
        } else {
            clearBtn.classList.remove('show')
        }
    }



    clearBtn.onclick = () => {
        document.querySelector('#search-page  .search-inp input').value = "";
    }




    // Category for Search  

    let select = document.querySelector('#search-page .search-body-filter .categoryWrapper select ');

    select.onchange = () => {



        let productName = document.querySelectorAll('#index .card .category span');
        let card = document.querySelectorAll('#index .wrapper ');

        for (let i = 0; i < productName.length; i++) {
            let prName = productName[i].innerText
            showHide(prName, i, select)
        }
    }



    // Funksiyalar

    function showHide(prName, i, select) {
        if (select.value == prName) {
            card[i].classList.remove('hide')
        }
        else {
            card[i].classList.add('hide')
        }
    }

    function spinnerLoad() {
        let spinner = document.querySelector('#index .spinner-border');
        spinner.classList.remove('show')
        let product_item = document.querySelector('#index .product_item');
        product_item.classList.remove('hide')
    }



















































})