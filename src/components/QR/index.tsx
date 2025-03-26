import { defineComponent, onMounted, ref, nextTick } from "vue";
import QRCode from "qrcode";

export default defineComponent({
    props: {
        data: {
            type: String,
            default: "https://github.com/loyaltly-cn"
        },
        width: {
            type: [String, Number],
            default: 200
        },
        height: {
            type: [String, Number],
            default: 200
        }
    },
    setup(props) {
        const qrCanvas = ref(null);

        onMounted(async () => {
            await nextTick();
            if (qrCanvas.value) {
                QRCode.toCanvas(qrCanvas.value, props.data, (error:any) => {
                    if (error) console.error(`canvas error: ${error}`);
                });
            }
        });

        return () => (
            <canvas ref={qrCanvas} width={props.width} height={props.height} />
        );
    }
});
