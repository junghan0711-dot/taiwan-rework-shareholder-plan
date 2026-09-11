import {
  ArrowDownRight,
  ArrowRight,
  GraduationCap,
  Leaf,
  ShieldCheck,
  Sprout,
  Truck,
} from 'lucide-react';

const months = [
  { label: '10月', cash: 3760, phase: '建置' },
  { label: '11月', cash: 3527, phase: '建置' },
  { label: '12月', cash: 3293, phase: '建置' },
  { label: '1月', cash: 3127, phase: '營運' },
  { label: '2月', cash: 2983, phase: '營運' },
  { label: '3月', cash: 2848, phase: '營運' },
  { label: '4月', cash: 2794, phase: '課程' },
  { label: '5月', cash: 2680, phase: '營運' },
  { label: '6月', cash: 2575, phase: '營運' },
  { label: '7月', cash: 2551, phase: '課程' },
  { label: '8月', cash: 2479, phase: '營運' },
  { label: '9月', cash: 2416, phase: '營運' },
];

const units = [
  { code: 'C01', name: '清運／堆肥', revenue: '38萬', cost: '105.7萬', result: '-67.7萬', tone: 'negative' },
  { code: 'C02', name: '有機蔬菜', revenue: '126萬', cost: '69.7萬', result: '+56.3萬', tone: 'positive' },
  { code: 'C03', name: '非營收支援', revenue: '—', cost: '58萬', result: '-58萬', tone: 'negative' },
  { code: 'C04', name: '課程教學', revenue: '20萬', cost: '66萬', result: '-46萬', tone: 'negative' },
];

const incomeDetails = [
  { source: '有機蔬菜銷售', basis: '2027年1月10萬起，每月增加1萬', amount: '126萬元', share: '68.5%' },
  { source: '清運服務運輸', basis: '每車次／客戶月2萬元', amount: '38萬元', share: '20.7%' },
  { source: '自然農法課程', basis: '每季10萬元；4月、7月各一期', amount: '20萬元', share: '10.8%' },
];

const costDetails = [
  { group: '共同人力', item: '管理者、財務各2萬元／月；農場與堆肥作業員2人各4.5萬元／月', timing: '2026.11起', amount: '143萬元' },
  { group: '建置投入', item: '食農教育場域60萬＋堆肥設備與建構50萬＋園區安全建置10萬', timing: '建置期', amount: '120萬元' },
  { group: '農場營運', item: '水電與農業生產5萬元／月＋農場年租16萬元按月攤提', timing: '2026.11起', amount: '69.7萬元' },
  { group: '護生園區', item: '飼料、照護、醫療及園區維護合計4萬元／月', timing: '全期', amount: '48萬元' },
  { group: '清運營運', item: '處理合作、車輛油資與安全耗材合計4.5萬元／月', timing: '2027.01起', amount: '40.5萬元' },
  { group: '清運直接成本', item: '每車次／客戶月0.8萬元，隨服務量變動', timing: '隨收入', amount: '15.2萬元' },
  { group: '課程直接成本', item: '講師、教材、活動保險與接待合計3萬元／季', timing: '4月、7月', amount: '6萬元' },
];

const cashLabel = (value: number) => `${(value / 10).toLocaleString('zh-TW')}萬`;

export default function Home() {
  return (
    <main>
      <nav className="nav-shell" aria-label="頁面導覽">
        <a className="brand" href="#top" aria-label="台灣再沃首頁">
          <span className="brand-mark"><Leaf size={18} strokeWidth={2.4} /></span>
          <span>台灣再沃</span>
        </a>
        <div className="nav-links">
          <a href="#overview">財務概況</a>
          <a href="#business">事業結構</a>
          <a href="#details">收支明細</a>
          <a href="#assumptions">規劃假設</a>
        </div>
        <span className="version-pill">股東版・2026.09</span>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">2026.10 — 2027.09 成立前營運規劃</p>
          <h1>把廢棄物，<br />變成下一輪生長。</h1>
          <p className="hero-lead">
            以清運與堆肥為起點，串聯有機蔬菜與自然農法教育，建立能被複製的地方循環經濟模式。
          </p>
          <div className="hero-meta">
            <span><ShieldCheck size={17} />啟動資金 500 萬元</span>
            <span>建置期至 2026 年 12 月</span>
          </div>
        </div>

        <div className="cycle-visual" aria-label="清運、農場與教育形成循環模式">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="cycle-center">
            <Sprout size={42} strokeWidth={1.5} />
            <strong>循環</strong>
            <span>再生價值</span>
          </div>
          <div className="cycle-node node-one"><Truck size={20} /><span>清運</span></div>
          <div className="cycle-node node-two"><Leaf size={20} /><span>農場</span></div>
          <div className="cycle-node node-three"><GraduationCap size={20} /><span>教育</span></div>
        </div>
      </section>

      <section className="section" id="overview">
        <div className="section-heading">
          <div>
            <p className="eyebrow">首年資金全貌</p>
            <h2>先守住現金，再讓營收成長。</h2>
          </div>
          <p>規劃期包含三個月建置期與九個月營運期，金額均為目前估算值。</p>
        </div>

        <div className="metrics-grid">
          <article className="metric-card accent-card">
            <span>規劃期收入</span>
            <strong>184<small>萬元</small></strong>
            <p>蔬菜收入占整體 68%</p>
          </article>
          <article className="metric-card">
            <span>規劃期支出</span>
            <strong>442.4<small>萬元</small></strong>
            <p>含建置與一次性設備支出</p>
          </article>
          <article className="metric-card warning-card">
            <span>營運結果</span>
            <strong>-258.4<small>萬元</small></strong>
            <p><ArrowDownRight size={16} />成立初期預期投入</p>
          </article>
          <article className="metric-card reserve-card">
            <span>期末現金</span>
            <strong>241.6<small>萬元</small></strong>
            <p>高於保留額 41.6 萬元</p>
          </article>
        </div>

        <article className="cash-panel">
          <div className="panel-copy">
            <p className="eyebrow light">現金水位</p>
            <h3>建置後仍保有<br /><em>23.2 個月</em>資金支應能力</h3>
            <p>依目前模型，2027 年 9 月期末現金為 241.6 萬元，仍高於 200 萬元最低保留額。</p>
            <div className="reserve-key"><i />最低保留額 200 萬元</div>
          </div>

          <div className="cash-chart" role="img" aria-label="2026年10月至2027年9月期末現金逐月下降，由376萬元降至241.6萬元">
            <div className="chart-scale"><span>500萬</span><span>350萬</span><span>200萬</span></div>
            <div className="reserve-line"><span>保留線</span></div>
            <div className="bars">
              {months.map((month) => (
                <div className="bar-wrap" key={month.label}>
                  <span className={`milestone ${month.phase === '課程' ? 'show' : ''}`}>課程</span>
                  <div className="bar" style={{ height: `${Math.max(30, month.cash / 12)}px` }}>
                    <span className="bar-value">{cashLabel(month.cash)}</span>
                  </div>
                  <span className="bar-label">{month.label}</span>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className="section split-section" id="business">
        <div className="business-intro">
          <p className="eyebrow">三股收入引擎</p>
          <h2>從單一生產，走向循環服務。</h2>
          <p>蔬菜是首年最明確的正向貢獻來源；清運與課程則需要隨客戶量與開課規模逐步放大。</p>
          <div className="engine-stack" aria-label="三項收入來源">
            <div><Truck /><span><b>清運服務</b><small>38 萬元</small></span></div>
            <div><Leaf /><span><b>有機蔬菜</b><small>126 萬元</small></span></div>
            <div><GraduationCap /><span><b>自然農法課程</b><small>20 萬元</small></span></div>
          </div>
          <div className="course-economics">
            <span>每季課程單位經濟</span>
            <div><b>收入 10萬</b><i>−</i><b>成本 3萬</b><i>=</i><strong>毛利 7萬</strong></div>
            <small>單季毛利率 70%；場域建置費另列。</small>
          </div>
        </div>

        <div className="unit-table" role="table" aria-label="各事業單位規劃期損益">
          <div className="unit-row table-head" role="row">
            <span>事業單位</span><span>收入</span><span>成本</span><span>貢獻</span>
          </div>
          {units.map((unit) => (
            <div className="unit-row" role="row" key={unit.code}>
              <span><i>{unit.code}</i>{unit.name}</span>
              <span>{unit.revenue}</span>
              <span>{unit.cost}</span>
              <strong className={unit.tone}>{unit.result}</strong>
            </div>
          ))}
          <p className="table-note">另有共同人力與管理費用 143 萬元，未歸屬至單一事業。</p>
        </div>
      </section>

      <section className="detail-section" id="details">
        <div className="detail-shell">
          <div className="section-heading detail-heading">
            <div>
              <p className="eyebrow light">收支來源拆解</p>
              <h2>錢從哪裡來，<br />又花到哪裡去。</h2>
            </div>
            <p>收入依產品與服務拆分；支出則區分人力、建置、固定營運及隨收入變動的直接成本。</p>
          </div>

          <div className="detail-grid">
            <article className="detail-card income-card">
              <div className="detail-card-head">
                <span>收入來源</span><strong>184萬元</strong>
              </div>
              <div className="source-bar" aria-label="收入占比：有機蔬菜68.5%，清運20.7%，課程10.8%">
                <i style={{ width: '68.5%' }} /><i style={{ width: '20.7%' }} /><i style={{ width: '10.8%' }} />
              </div>
              {incomeDetails.map((row) => (
                <div className="detail-row income-row" key={row.source}>
                  <span><b>{row.source}</b><small>{row.basis}</small></span>
                  <span>{row.share}</span>
                  <strong>{row.amount}</strong>
                </div>
              ))}
            </article>

            <article className="detail-card cost-card">
              <div className="detail-card-head">
                <span>成本支出</span><strong>442.4萬元</strong>
              </div>
              {costDetails.map((row) => (
                <div className="detail-row cost-row" key={row.group}>
                  <span><b>{row.group}</b><small>{row.item}</small></span>
                  <span>{row.timing}</span>
                  <strong>{row.amount}</strong>
                </div>
              ))}
              <p className="detail-footnote">以上金額合計約 442.4 萬元；四捨五入可能產生尾差。</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="assumptions">
        <div className="section-heading assumptions-head">
          <div>
            <p className="eyebrow">模型關鍵假設</p>
            <h2>每個數字，都有時間軸。</h2>
          </div>
          <p>股東可由這些假設快速判讀資金需求與營收成長路徑。</p>
        </div>

        <div className="timeline">
          <article>
            <span className="timeline-date">2026.10</span>
            <h3>場域與設備建置</h3>
            <p>食農教育場域 60 萬元；廚餘堆肥設備與建構 50 萬元。</p>
          </article>
          <article>
            <span className="timeline-date">2026.11</span>
            <h3>生產團隊進場</h3>
            <p>四人每月人力 13 萬元，生產水電 5 萬元；年租 16 萬元按月攤提。</p>
          </article>
          <article>
            <span className="timeline-date">2027.01</span>
            <h3>蔬菜開始收成</h3>
            <p>首月收入目標 10 萬元，其後每月增加 1 萬元，9 月達 18 萬元。</p>
          </article>
          <article>
            <span className="timeline-date">2027.04</span>
            <h3>自然農法課程啟動</h3>
            <p>每季收入10萬元、直接成本3萬元；本期認列4月與7月兩季。</p>
          </article>
        </div>
      </section>

      <section className="decision-section">
        <div>
          <p className="eyebrow light">股東判讀重點</p>
          <h2>首年不是追求帳面獲利，<br />而是驗證三個收入引擎。</h2>
        </div>
        <div className="decision-list">
          <p><span>01</span><span>蔬菜事業預計貢獻 <b>+56.3 萬元</b>，是首年基本盤。</span></p>
          <p><span>02</span><span>期末現金高於安全線 <b>41.6 萬元</b>，仍需嚴格控管支出。</span></p>
          <p><span>03</span><span>課程單季可貢獻 <b>7 萬元毛利</b>；清運客戶量是下一版模型的重要驗證項目。</span></p>
        </div>
      </section>

      <footer>
        <div className="brand"><span className="brand-mark"><Leaf size={18} /></span><span>台灣再沃</span></div>
        <p>本頁為成立前營運規劃，數據係依目前假設推估，非財務保證。模型版本：2026 年 9 月。</p>
        <a href="#top">回到頂端 <ArrowRight size={15} /></a>
      </footer>
    </main>
  );
}
