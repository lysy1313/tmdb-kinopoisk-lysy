import s from './StubPage.module.scss';

export const StubPage = () => {
  const handleReload = () => {
    window.location.href = '/'; // Полная перезагрузка для сброса кеша и новой проверки middleware
  };

  return (
    <div className={s.root}>
      <div className={s.card}>
        <div className={s.iconWrapper}>
          <span role="img" aria-label="blocked">
            🌍
          </span>
          <div className={s.lockBadge}>LOCKED</div>
        </div>

        <h1 className={s.title}>Access Restricted</h1>

        <p className={s.description}>
          К сожалению, <span>TMDB API</span> недоступен в вашем регионе без дополнительных средств обхода (VPN). Мы
          ценим ваше время, но кинотеатр временно закрыт на технический перерыв по требованию провайдера.
        </p>

        <button className={s.button} onClick={handleReload}>
          Я включил VPN, обновить
        </button>

        <div className={s.footer}>Status: 403 Forbidden | Region: Blocked</div>
      </div>
    </div>
  );
};
