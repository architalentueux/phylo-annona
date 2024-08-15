import { sveltekit } from '@sveltejs/kit/vite';
import {  defineConfig, searchForWorkspaceRoot } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	vite: {
        server: {
            fs: {
				allow: [searchForWorkspaceRoot(process.cwd()), ".."]
            }
        }
    }
});



