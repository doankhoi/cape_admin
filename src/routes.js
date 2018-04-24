import React from 'react';
import KBPage from './pages/knowledge_base/KBPage';
import NotFoundPage from './pages/notfound/NotFoundPage';
import MessagesPage from './pages/messages/MessagesPage';
import ListingsPage from './pages/listings/ListingsPage';
import TemplatesPage from './pages/templates/TemplatesPage';
import ReservationsPage from './pages/reservations/ReservationsPage';
import Teams from './pages/teams/TeamsPage';

const routes = [
    {
        path: "/kb",
        exact: false,
        main: () => <KBPage />
    },
    {
        path: "/messages",
        exact: false,
        main: () => <MessagesPage />
    },
    {
        path: "/listings",
        exact: false,
        main: () => <ListingsPage />
    },
    {
        path: "/templates",
        exact: false,
        main: () => <TemplatesPage />
    },
    {
        path: "/reservations",
        exact: false,
        main: () => <ReservationsPage />
    },
    {
        path: "/teams",
        exact: false,
        main: () => <Teams />
    },
    {
        path: "",
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;
