import type * as React from 'react';
export type IconName = 'portafolio' | 'alerta' | 'cronograma' | 'riesgo' | 'acuerdo' | 'equipo' | 'hito' | 'curva' | 'cambio' | 'asesor';
export interface IconProps { name: IconName; size?: number; className?: string }
export declare function Icon(props: IconProps): React.ReactElement;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary' | 'accent' | 'outline' | 'pill'; size?: 'md' | 'sm'; icon?: IconName }
export declare function Button(props: ButtonProps): React.ReactElement;
export interface StatusPillProps { tone?: 'ok' | 'warn' | 'crit' | 'idle' | 'info'; children?: React.ReactNode }
export declare function StatusPill(props: StatusPillProps): React.ReactElement;
export interface SectionTitleProps { title: string; eyebrow?: string; align?: 'center' | 'left' }
export declare function SectionTitle(props: SectionTitleProps): React.ReactElement;
export interface KpiTileProps { label: string; value: React.ReactNode; sub?: string; icon?: IconName }
export declare function KpiTile(props: KpiTileProps): React.ReactElement;
export interface ProjectCardProps { code: string; name: string; tone?: 'ok' | 'warn' | 'crit' | 'idle'; status?: string; real?: number; plan?: number | null; spi?: number | null; featured?: boolean; onOpen?: () => void }
export declare function ProjectCard(props: ProjectCardProps): React.ReactElement;
export interface CountdownProps { target: string | number | Date; title: string; label?: string }
export declare function Countdown(props: CountdownProps): React.ReactElement;
declare global { interface Window { Proyecta: { Button: typeof Button; StatusPill: typeof StatusPill; SectionTitle: typeof SectionTitle; KpiTile: typeof KpiTile; ProjectCard: typeof ProjectCard; Countdown: typeof Countdown; Icon: typeof Icon } } }
