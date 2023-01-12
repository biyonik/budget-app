<script>
    import { Card, CardBody } from 'sveltestrap';
</script>

<Card color="light" inverse class="mb-3">
    <CardBody class="text-center p-5">
        <div class="text-danger fw-bolder money">Salary</div>
        <div class="text-danger fw-bolder">5000</div>
        <div class="text-white fw-bolder date">16/12/2023</div>
        <div class="text-white delete">X</div>
    </CardBody>
</Card>

<style>
    .money {
        background-color: #C5CBD8;
        padding: 0 5px;
        border-radius: 0.25rem;
        width: fit-content;
        position: absolute;
        top: -5px;
        left: -5px;
    }

    .date {
        background-color: #C5CBD8;
        padding: 0 5px;
        border-radius: 0.25rem;
        width: fit-content;
        position: absolute;
        right: -6px;
        bottom: -5px;
        color: #FFFFFF;
    }

    .delete {
        position: absolute;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        top: -5px;
        right: -6px;
        border: none;
        border-radius: 50%;
        background-color: rgba(51, 50, 50, .8);
        cursor: pointer;
    }

    .delete:hover {
        background-color: black;
        transition: all 0.5s ease-in-out;
    }
</style>
