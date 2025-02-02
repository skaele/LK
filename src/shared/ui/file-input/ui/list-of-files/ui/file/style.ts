import styled from 'styled-components'

import { Colors } from '@shared/consts'

const FileWrapper = styled.div`
    width: 100%;
    padding: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${Colors.grey.transparent3};
    border-radius: var(--brLight);

    .loading-circle {
        position: relative;
        transform: none;
        left: auto;
        top: auto;
        width: 20px;
        height: 20px;
    }

    .file-body {
        display: flex;
        gap: 8px;
        align-items: center;
        cursor: pointer;

        .name-and-size {
            display: flex;
            flex-direction: column;

            .file-name {
                font-size: 0.8em;
                word-break: break-all;
            }
        }

        .image-container {
            padding: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--theme);
            border-radius: var(--brLight);

            svg {
                width: 20px;
                height: 20px;
            }
        }
    }
`

export default FileWrapper
