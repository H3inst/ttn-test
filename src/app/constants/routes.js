const routes = {

    root: '/',
    access: '/access',

    dashboard: '/dashboard',

    get dashboardIncidents() {
        return `${this.dashboard}/incidents`
    }
};

export default Object.freeze(routes);