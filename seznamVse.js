//celoten info
        function seznamVse() {
            fetch('items.json')
                .then(response => response.json())
                .then(data => seznamFunction(data));
        }

        function seznamFunction(data) {

            var table = "<table border=1>";
            var table2 = "<table border=1>";
            var table3 = "<table border=1>";
            var table4 = "<table border=1>";
            var table5 = "<table border=1>";
            var table6 = "<table border=1>";

            table += `<tr>
                        <th>ItemId</th>
                        <th>Title</th >
                        <th>Code</th>
                        <th>UnitOfMeasurement</th>
                        <th>ItemType</th>
                        <th colspan="3">VatRate</th>
                      </tr>`;

            table += `<tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Resourceurl</th>
                      </tr>`;

            table2 += `<tr>
                            <th>Price</th>
                            <th colspan="3">Currency</th>
                            <th>ProductGroup</th>
                       </tr>`;

            table2 += `<tr>
                        <th></th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Resourceurl</th>
                        <th></th>
                       </tr>`;

            table3 += `<tr>
                            <th colspan="3">RevenueAccountDomestic</th>
                       </tr>`;

            table3 += `<tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Resourceurl</th>
                       </tr>`;

            table4 += `<tr>
                            <th colspan="3">RevenueAccountOutsideEU</th>
                       </tr>`;

            table4 += `<tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Resourceurl</th>
                        </tr>`;

            table5 += `<tr>
                            <th colspan="3">RevenueAccountEU</th>
                       </tr>`;

            table5 += `<tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Resourceurl</th>
                        </tr>`

            table6 += `<tr>
                            <th colspan="3">StocksAccount</th>
                       </tr>`;

            table6 += `<tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Resourceurl</th>
                        </tr>`

            var tr = "";
            var tr2 = "";
            var tr3 = "";
            var tr4 = "";
            var tr5 = "";
            var tr6 = "";
            for (let i = 0; i < data.Rows.length; i++) {
                tr += "<tr>";
                tr += `<td>${data.Rows[i].ItemId}</td>`;
                tr += `<td>${data.Rows[i].Title}</td>`;
                tr += `<td>${data.Rows[i].Code}</td>`;
                tr += `<td>${data.Rows[i].UnitOfMeasurement}</td>`;
                tr += `<td>${data.Rows[i].ItemType}</td>`;
                for (var key in data.Rows[i].VatRate) {

                    tr += `<td>${data.Rows[i].VatRate[key]}</td>`;

                }
                tr += "</tr>";

                tr2 += "<tr>";
                tr2 += `<td>${data.Rows[i].Price}</td>`;
                for (var key in data.Rows[i].Currency) {

                    tr2 += `<td>${data.Rows[i].Currency[key]}</td>`;

                }
                tr2 += `<td>${data.Rows[i].ProductGroup}</td>`
                tr2 += "</tr>";


                tr3 += "<tr>";
                for (var key in data.Rows[i].RevenueAccountDomestic) {

                    tr3 += `<td>${data.Rows[i].RevenueAccountDomestic[key]}</td>`;

                }
                tr3 += "</tr>";


                tr4 += "<tr>";
                for (var key in data.Rows[i].RevenueAccountOutsideEU) {

                    tr4 += `<td>${data.Rows[i].RevenueAccountOutsideEU[key]}</td>`;

                }
                tr4 += "</tr>"


                tr5 += "<tr>";
                for (var key in data.Rows[i].RevenueAccountEU) {

                    tr5 += `<td>${data.Rows[i].RevenueAccountEU[key]}</td>`;

                }
                tr5 += "</tr>"


                tr6 += "<tr>";
                for (var key in data.Rows[i].StocksAccount) {

                    tr6 += `<td>${data.Rows[i].StocksAccount[key]}</td>`;

                }
                tr6 += "</tr>"


            }
            table += tr + "</table>";
            table2 += tr2 + "</table>";
            table3 += tr3 + "</table>";
            table4 += tr4 + "</table>";
            table5 += tr5 + "</table>";
            table6 += tr6 + "</table>";

            document.body.innerHTML += table+table2+table3+table4+table5+table6;

        }

                seznamVse();