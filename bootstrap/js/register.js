/**
 * Created by lenovo on 2016/3/4.
 */

    function onclickli(num)
    {

        switch(num)
        {
            case 1:
                document.getElementById('modal-body1').style.display="block";
                document.getElementById('modal-body2').style.display="none";
                break;
            case 2:
                document.getElementById('modal-body2').style.display="block";
                document.getElementById('modal-body1').style.display="none";
                break;

        }

    }
