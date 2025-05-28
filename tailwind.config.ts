import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				neon: {
					red: '#E0115F',
					redBright: '#E0115F', 
					redGlow: '#E0115F',
					black: '#000000',
					darkGray: '#111111',
					white: '#ffffff',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						filter: 'drop-shadow(0 0 1rem #ff0022)',
						textShadow: '0 0 20px #ff0022'
					},
					'50%': { 
						filter: 'drop-shadow(0 0 2rem #ff0022)',
						textShadow: '0 0 30px #ff0022'
					},
				},
				'lightning-flash': {
					'0%, 100%': { 
						opacity: '0.2' 
					},
					'0.5%, 5.5%': { 
						opacity: '0.5' 
					},
					'1%, 5%': { 
						opacity: '0.8' 
					},
					'2%, 4%': { 
						opacity: '0.4' 
					},
					'3%': { 
						opacity: '0.9' 
					},
					'49%, 51%': { 
						opacity: '0.1' 
					},
					'50%': { 
						opacity: '0.6' 
					},
					'52%': { 
						opacity: '0.2' 
					},
					'53%, 55%': { 
						opacity: '0.3' 
					},
					'54%': { 
						opacity: '0.5' 
					},
					'90%, 92%': { 
						opacity: '0.2' 
					},
					'91%': { 
						opacity: '0.5' 
					},
				},
				'flicker': {
					'0%, 100%': { 
						opacity: '1' 
					},
					'33%': { 
						opacity: '0.9' 
					},
					'66%': { 
						opacity: '0.94' 
					},
				},
				'ripple': {
					'0%': { 
						transform: 'scale(1)',
						opacity: '0.4' 
					},
					'100%': { 
						transform: 'scale(1.5)',
						opacity: '0' 
					},
				},
				'glitch': {
					'0%, 100%': { 
						transform: 'translate(0)' 
					},
					'20%': { 
						transform: 'translate(-2px, 2px)' 
					},
					'40%': { 
						transform: 'translate(-2px, -2px)' 
					},
					'60%': { 
						transform: 'translate(2px, 2px)' 
					},
					'80%': { 
						transform: 'translate(2px, -2px)' 
					}
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0)' 
					},
					'50%': { 
						transform: 'translateY(-10px)' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 3s infinite ease-in-out',
				'lightning-flash': 'lightning-flash 10s infinite',
				'flicker': 'flicker 2s infinite',
				'ripple': 'ripple 1s linear',
				'glitch': 'glitch 0.5s ease-in-out',
				'float': 'float 5s infinite ease-in-out'
			},
			fontFamily: {
				'display': ['Playfair Display', 'serif'],
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				// Keep legacy names for compatibility
				'orbitron': ['Playfair Display', 'serif'],
				'montserrat': ['Inter', 'system-ui', 'sans-serif']
			},
			backgroundImage: {
				'lightning': "url('/lightning.svg')",
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		// Add custom plugin for light mode variant
		plugin(function({ addVariant }) {
			// Add light variant
			addVariant('light', '.light &');
		})
	],
} satisfies Config;
