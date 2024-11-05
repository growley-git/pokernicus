<template>
    <header>
        <Navbar/>
    </header>
    <main>
        <img src="https://placehold.co/1600x450" class="img-fluid"/>
        <Container style="margin-top:-120px;">
            <Row>
                <Col class="rounded-top" size="auto" style="background:white;padding:16px;">
                    <h1 class="mb-0" v-html="title"></h1>
                    <h2 class="mb-0" v-html="location"></h2>
                    <h3 class="mb-0">
                        <span v-html="moment(startTime).format('L LT')"></span>&mdash;<span v-html="moment(endTime).format('L LT')"></span>
                    </h3>
                </Col>
                <Col>
                    
                </Col>
            </Row>
            <Row>
                <Col :lg="9" class="pt-3">
                    <h5 class="fw-bold">Chip Menu</h5>
                    <Row>
                        <Col>
                            <ChipMenu class="shadow-sm"/>
                        </Col>
                        <Col>
                            <ChipMenu class="shadow-sm"/>
                        </Col>
                    </Row>
                    <h5 class="fw-bold mt-3">Blind Timer</h5>
                    <BlindTimer class="mt-3"/>
                    <TableAssignment :no="1" :dealer="{ username: 'Adipisicing'}"/>
                    <TableAssignment :no="2" :dealer="{ username: 'Ullamco '}"/>
                </Col>
                <Col :lg="3" class="pt-3">
                    <div class="d-flex align-items-center justify-content-center">
                        <QrcodeVue
                            :size="300"
                            :value="title"
                            class="img-thumbnail rounded img-fluid w-100 p-3"
                            level="H"
                            render-as="svg"/>
                    </div>
                    <h5 class="fw-bold">Event Leader Board</h5>
                    <LeaderBoard class="shadow-sm"/>
                </Col>
            </Row>
        </Container>
    </main>
    <footer>
        <Container></Container>
    </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import moment from 'moment'
import QrcodeVue from 'qrcode.vue'
import Navbar from '../components/Navbar.vue'
import Container from '../components/Container.vue'
import Row from '../components/Row.vue'
import Col from '../components/Col.vue'
import LeaderBoard from '../components/Game/LeaderBoard.vue'
import ChipMenu from '../components/Game/ChipMenu.vue'
import TableAssignment from '../components/Game/TableAssignment.vue'
import BlindTimer from '../components/Game/BlindTimer.vue'

const props = withDefaults(defineProps<{
    title?: string,
    location?: string,
    startTime?: string,
    endTime?: string,
}>(), {
    title: 'Res&rsquo; Bounty Hunt',
    location: '844 E Roosevelt Rd, Lombard, Illinois 60148',
    startTime: '11/03/2024 8:00 PM',
    endTime: '11/03/2024 11:00 PM',
})

const classes = computed(() => ({}))
</script>

<style scoped lang="scss">

</style>