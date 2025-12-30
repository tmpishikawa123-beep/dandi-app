import React from 'react';
import Hero from './components/Hero'
import Interior from './components/Interior';
import BussinessDay from './components/BussinessDay';
import Access from './components/Access';
import Social from './components/Social';
import LunchMenu from './components/LunchMenu';

export default function Home() {
  return (
    // スクロールスナップを有効にするコンテナ
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* 店名及び背景イメージ */}
      <section className="snap-start h-screen">
        <Hero />
      </section>

      {/* 店内の写真とコンセプト */}
      <section className="snap-start h-screen">
        <Interior imageUrl="./interior.jpg" title={"益子の洋食屋さん"} description={"益子の片隅の、山懐にひっそりと佇む\n欧風家庭料理のレストラン&カフェです！\nオーナーシェフは、栄養士歴30年のお母さんです！\n \nドックカフェではありませんが\n愛犬と一緒に食事の出来るお部屋が\n一部屋2テーブルあります！\nご予約も出来ますが、休日は午前中のみのご予約で、\nあとは、先着順となります！\n\nご予約は、営業日、営業時間内にお電話にて\n承っております！\nまた、当店ご利用のお客様限定で\n無料のドッグランも開放しております！\nご自由に遊んで行ってください！\n\nまた、デッキも、屋根が広くなってますので、\n愛犬と一緒にこちらも過ごせます！\n季節のいい日はこちらもご利用下さい！"} />
      </section>

      {/* 料理の写真とコンセプト */}
      <section className="snap-start h-screen">
        <LunchMenu title="ランチメニュー" />
      </section>

      {/* 営業日 */}
      <section className="snap-start h-screen">
        <BussinessDay imageUrl="./interior.jpg" title="営業日"  />
      </section>

      {/* GoogleMapとカレンダー */}
      <section className="snap-start h-screen">
        <Access />
      </section>

      {/* SNS */}
      <section className="snap-start h-screen">
        <Social />
      </section>
    </main>
  );
}