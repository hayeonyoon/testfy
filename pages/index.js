import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!23232323" />
        <p className="description">
          Get started by editing 111111111<code>pages/index.js</code>
         ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ
    ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
        </p>
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>복리 계산기</title>
</head>
<body>
    <h1>복리 계산기</h1>
    <p>초기 투자 금액: <input type="number" id="initialInvestment" min="0" step="any"></p>
    <p>복리 기간 (년): <input type="number" id="compoundPeriod" min="1" step="1"></p>
    <p>수익률 (%): <input type="number" id="interestRate" min="0" step="any"></p>
    <button onclick="calculateCompoundInterest()">계산하기</button>
    <table border="1" id="resultTable" style="display: none;">
        <thead>
            <tr>
                <th>년도</th>
                <th>총 투자 금액</th>
            </tr>
        </thead>
        <tbody id="resultTableBody">
        </tbody>
    </table>

    <script>
        function calculateCompoundInterest() {
            const initialInvestment = parseFloat(document.getElementById("initialInvestment").value);
            const compoundPeriod = parseInt(document.getElementById("compoundPeriod").value);
            const interestRate = parseFloat(document.getElementById("interestRate").value);

            if (isNaN(initialInvestment) || isNaN(compoundPeriod) || isNaN(interestRate)) {
                alert("모든 값을 올바르게 입력해주세요.");
                return;
            }

            const tableBody = document.getElementById("resultTableBody");
            tableBody.innerHTML = "";
            for (let year = 1; year <= compoundPeriod; year++) {
                const totalInvestment = initialInvestment * Math.pow(1 + interestRate / 100, year);
                const tableRow = document.createElement("tr");
                const yearCell = document.createElement("td");
                yearCell.textContent = year;
                const investmentCell = document.createElement("td");
                investmentCell.textContent = totalInvestment.toFixed(2);
                tableRow.appendChild(yearCell);
                tableRow.appendChild(investmentCell);
                tableBody.appendChild(tableRow);
            }

            document.getElementById("resultTable").style.display = "table";
        }
    </script>
</body>
</html>

      </main>

      <Footer />
    </div>
  )
}
