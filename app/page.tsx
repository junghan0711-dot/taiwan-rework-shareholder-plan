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
  { label: '1月', cash: 3102, phase: '營運' },
  { label: '2月', cash: 2933, phase: '營運' },
  { label: '3月', cash: 2773, phase: '營運' },
  { label: '4月', cash: 2724, phase: '課程' },
  { label: '5月', cash: 2585, phase: '營運' },
  { label: '6月', cash: 2455, phase: '營運' },
  { label: '7月', cash: 2436, phase: '課程' },
  { label: '8月', cash: 2339, phase: '營運' },
  { label: '9月', cash: 2251, phase: '營運' },
];

const units = [
  { code: 'C01', name: '清運／堆肥', revenue: '38萬', cost: '105.7萬', result: '-67.7萬', tone: 'negative' },
  { code: 'C02', name: '有機蔬菜', revenue: '126萬', cost: '69.7萬', result: '+56.3萬', tone: 'positive' },
  { code: 'C03', name: '非營收支援', revenue: '—', cost: '58萬', result: '-58萬', tone: 'negative' },
  { code: 'C04', name: '課程教學', revenue: '20萬', cost: '82.5萬', result: '-62.5萬', tone: 'negative' },
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
            <strong>458.9<small>萬元</small></strong>
            <p>含建置與一次性設備支出</p>
          </article>
          <article className="metric-card warning-card">
            <span>營運結果</span>
            <strong>-274.9<small>萬元</small></strong>
            <p><ArrowDownRight size={16} />成立初期預期投入</p>
          </article>
          <article className="metric-card reserve-card">
            <span>期末現金</span>
            <strong>225.1<small>萬元</small></strong>
            <p>高於保留額 25.1 萬元</p>
          </article>
        </div>

        <article className="cash-panel">
          <div className="panel-copy">
            <p className="eyebrow light">現金水位</p>
            <h3>建置後仍保有<br /><em>21.8 個月</em>資金支應能力</h3>
            <p>依目前模型，2027 年 9 月期末現金為 225.1 萬元，仍高於 200 萬元最低保留額。</p>
            <div className="reserve-key"><i />最低保留額 200 萬元</div>
          </div>

          <div className="cash-chart" role="img" aria-label="2026年10月至2027年9月期末現金逐月下降，由376萬元降至225.1萬元">
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
            <p>每季收入目標 10 萬元；本期認列 4 月與 7 月兩季。</p>
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
          <p><span>02</span><span>期末現金僅高於安全線 <b>25.1 萬元</b>，支出控管是核心。</span></p>
          <p><span>03</span><span>清運客戶量與課程直接成本，是下一版模型最重要的驗證項目。</span></p>
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
