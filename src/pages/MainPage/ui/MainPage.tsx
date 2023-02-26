import { useTranslation } from 'react-i18next';
import { BugButton } from 'widgets/BugButton';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            <BugButton />
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
