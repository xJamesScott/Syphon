export const email =`
<!DOCTYPE html>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet">

<body style="font-family: 'Roboto', sans-serif; background: magenta;">
    <table 
    style="
    width: 100%;
    font-family: 'Roboto', sans-serif; 
    background: green;" 
    align="center">
        <table style=" width: 100%; ">
            <tr align="center">
                <td>
                    <img src="https://via.placeholder.com/100.png/09f/fff" />
                </td>
            </tr>
            <tr align="center">
                <th>THANK YOU FOR YOUR ORDER!</th>

            </tr>
            <tr align="center">
                <td>We processing your order :)</td>
            </tr>

            <tr>
                <td>
                    <hr />
                </td>
            </tr>
            <tr>
                <td align="center">
                    ORDER DETAILS
                </td>
            </tr>
            <tr>
                <td>
                    <hr />
                </td>
            </tr>
        </table>
        <table align="center">
            <tr align="left">
                <td text-align="left">
                    Items: {# of items}
                    <br />
                    Shipping to: {123 ABC ST City, ST 55555}
                    <br />
                    Total: {total}
                </td>
            </tr>
        </table>
    </table>

</body>


</html>
`

