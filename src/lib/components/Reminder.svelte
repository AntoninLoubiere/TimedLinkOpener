<script lang="ts">
    import { locale, t } from '$lib/translations';
    import SveltyPicker from 'svelty-picker';
    import { svelteTime, dayjs } from 'svelte-time';
    import { createEventDispatcher, onMount } from 'svelte';

    export let timedLink: TimedLink = {
        openDate: new Date(),
        url: 'https://',
    };

    let edited = false;
    $: dateFormater = new Intl.DateTimeFormat($locale, {
        dateStyle: 'full',
        timeStyle: 'short',
    });

    let _date = '';
    $: if (_date) timedLink.openDate = new Date(_date);
    onMount(() => {
        dayjs.locale('fr');
    });

    const dispatcher = createEventDispatcher();

    function edit(this: HTMLElement) {
        this.blur();
        edited = !edited;
        dispatcher('edit');
    }

    function deleteReminder(this: HTMLElement) {
        this.blur();
        dispatcher('delete');
    }
</script>

<div
    class="m-2 px-4 py-1 h-11 max-w-6xl flex gap-2 flex-col md:flex-row md:items-center
    border border-neutral-500 rounded-md
    hover:border-primary dark:hover:border-primary-dark
    cursor-pointer group relative"
    on:dblclick={edit}
>
    <div class="flex-grow flex items-center gap-2">
        <span>{$t('label-url')}</span>
        {#if edited}
            <!-- svelte-ignore a11y-autofocus -->
            <input
                type="url"
                bind:value={timedLink.url}
                placeholder="https://example.com/…"
                class="flex-grow"
                autofocus
            />
        {:else}
            <a href={timedLink.url} class="link" target="_blank">{timedLink.url}</a>
        {/if}
    </div>
    <div>
        <span>{$t('label-date')}</span>
        {#if edited}
            <SveltyPicker
                inputClasses="form-control"
                format="yyyy-mm-dd hh:ii"
                bind:value={_date}
                initialDate={timedLink.openDate}
            />
        {:else}
            <time
                use:svelteTime={{
                    timestamp: timedLink.openDate,
                    relative: true,
                    live: true,
                }}
            />
            ({dateFormater.format(timedLink.openDate)})
        {/if}
    </div>
    <div class="button-popup-icon">
        <button class="button-icon" on:click={edit}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
            </svg>
        </button>
        <button class="button-icon-red" on:click={deleteReminder}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
            </svg>
        </button>
    </div>
</div>
