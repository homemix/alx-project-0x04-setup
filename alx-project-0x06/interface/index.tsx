// Button component props
export interface ButtonProps {
    buttonLabel: string;
    buttonSize?: string;
    buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
    action?: () => void;
}

// Props for the routing helper used in Home page
export interface PageRouteProps {
    pageRoute: string;
}

// Layout component props
export interface LayoutProps {
    children: React.ReactNode;
}