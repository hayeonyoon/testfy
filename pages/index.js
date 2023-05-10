import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
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

 </Head>

      <main>
        <Header title="복리 계산기" />
        <p className="description">
          <code>복리 계산기</code></p>
   <p>초기 투자 금액: <input type="number" id="initialInvestment" min="0" step="any"></p>
    <p>복리 기간 (년): <input type="number" id="compoundPeriod" min="1" step="1"></p>
    <p>수익률 (%): <input type="number" id="interestRate" min="0" step="any"></p>
    <button onclick="calculateCompoundInterest()">계산하기</button>
    <h2>계산 결과</h2>
    <p id="result" style="display: none;"></p>

  
         

       

      </main>

      <Footer />
    </div>
  )
}
