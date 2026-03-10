import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  Badge,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CheckCircleFill,
  XCircleFill,
  PeopleFill,
  HouseFill,
  CurrencyExchange,
  ClockHistory,
  PersonPlus,
  CurrencyDollar,
  PencilSquare,
  ExclamationTriangle,
} from "react-bootstrap-icons";

const AdminPanelBootstrap = () => {
  return (
    <Container fluid className="p-0">
      {/* Topbar */}
      <div className="d-flex justify-content-between align-items-center p-3 border-bottom bg-white">
        <div className="d-flex align-items-center gap-2">
          <div className="bg-warning p-2 rounded">
            <span className="material-symbols-outlined">grid_view</span>
          </div>
          <h4 className="mb-0">Asım Boray Sulakcı</h4>
        </div>
        <div className="d-flex align-items-center gap-3">
          <div className="text-end">
            <div>Asım Boray Sulakcı</div>
            <small className="text-muted">Süper Admin</small>
          </div>
          <div
            className="rounded-circle border"
            style={{
              width: "40px",
              height: "40px",
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDl9PHFm4mSoknaRXBa02-EKU-G3XvApSSZBZ8oHEodcqg9VYxKkblgh0wVvuifvZk9awdAdWEI6sLIfwKnyIHFa9GLbYtiWA_gQd4ZsARj-ntlqN2bZoxNots1trSJEQScaF_XhID6fZsPizOB5mxvWsHOTpEusv3TwHXvbiLHmrMiFg8xHk_icMyrtX1GD3gxq3ADweiDzxS7mQhkojO1SxNDnBHR3hhA3YTxkASe0E-xz4cYxiFUymAFTOGB4rb3kNGEtCJaVL0')",
              backgroundSize: "cover",
            }}
          ></div>
          <Button variant="outline-danger">Çıkış Yap</Button>
        </div>
      </div>

      <Row className="g-0">
        {/* Sidebar */}
        <Col md={2} className="bg-light border-end min-vh-100 p-3">
          <ListGroup variant="flush">
            <ListGroup.Item className="bg-warning text-dark fw-bold">
              <span className="material-symbols-outlined me-2">grid_view</span>{" "}
              Panel
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="material-symbols-outlined me-2">group</span>{" "}
              Kullanıcılar
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="material-symbols-outlined me-2">list_alt</span>{" "}
              İlanlar
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="material-symbols-outlined me-2">payments</span>{" "}
              Ödemeler
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="material-symbols-outlined me-2">settings</span>{" "}
              Ayarlar
            </ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Main Content */}
        <Col md={10} className="p-4">
          <h2>Hoş Geldin, Asım</h2>
          <p className="text-muted">Marketplace durumuna hızlı bir bakış.</p>

          {/* Stats Cards */}
          <Row className="mb-4">
            <Col lg={3} sm={6} className="mb-3">
              <Card className="h-100">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Title className="mb-0">Toplam Kullanıcı</Card.Title>
                    <PeopleFill className="text-warning" />
                  </div>
                  <h3>12,450</h3>
                  <small className="text-success">+12% geçen ay</small>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} sm={6} className="mb-3">
              <Card className="h-100">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Title className="mb-0">Aktif İlanlar</Card.Title>
                    <HouseFill className="text-warning" />
                  </div>
                  <h3>3,120</h3>
                  <small className="text-success">+5.4% bugün</small>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} sm={6} className="mb-3">
              <Card className="h-100">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Title className="mb-0">Toplam Gelir</Card.Title>
                    <CurrencyExchange className="text-warning" />
                  </div>
                  <h3>₺450.000</h3>
                  <small className="text-success">+18% bu hafta</small>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} sm={6} className="mb-3">
              <Card className="h-100">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Title className="mb-0">Bekleyen Onaylar</Card.Title>
                    <ClockHistory className="text-warning" />
                  </div>
                  <h3>42</h3>
                  <small className="text-warning">Hemen incele</small>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            {/* Pending Listings */}
            <Col lg={8}>
              <Card className="mb-3">
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <strong>Onay Bekleyen İlanlar</strong>
                  <Button variant="link" className="text-warning p-0">
                    Tümünü Gör
                  </Button>
                </Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="https://via.placeholder.com/60x40"
                        alt="Villa"
                        className="rounded"
                      />
                      <div>
                        <div className="fw-semibold">
                          Modern Villa - Bodrum Merkez
                        </div>
                        <small className="text-muted">
                          Emlak • 10.500.000 ₺
                        </small>
                      </div>
                    </div>
                    <div className="d-flex gap-2">
                      <Button variant="success" size="sm">
                        <CheckCircleFill />
                      </Button>
                      <Button variant="danger" size="sm">
                        <XCircleFill />
                      </Button>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="https://via.placeholder.com/60x40"
                        alt="BMW"
                        className="rounded"
                      />
                      <div>
                        <div className="fw-semibold">
                          BMW M4 Competition 2023
                        </div>
                        <small className="text-muted">
                          Vasıta • 6.450.000 ₺
                        </small>
                      </div>
                    </div>
                    <div className="d-flex gap-2">
                      <Button variant="success" size="sm">
                        <CheckCircleFill />
                      </Button>
                      <Button variant="danger" size="sm">
                        <XCircleFill />
                      </Button>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="https://via.placeholder.com/60x40"
                        alt="Daire"
                        className="rounded"
                      />
                      <div>
                        <div className="fw-semibold">
                          3+1 Deniz Manzaralı Daire
                        </div>
                        <small className="text-muted">
                          Emlak • 4.200.000 ₺
                        </small>
                      </div>
                    </div>
                    <div className="d-flex gap-2">
                      <Button variant="success" size="sm">
                        <CheckCircleFill />
                      </Button>
                      <Button variant="danger" size="sm">
                        <XCircleFill />
                      </Button>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>

            {/* Recent Activities */}
            <Col lg={4}>
              <Card>
                <Card.Header>
                  <strong>Son Aktiviteler</strong>
                </Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex align-items-center gap-2">
                    <PersonPlus className="text-warning" />
                    <div>
                      <div className="fw-semibold">Yeni üye kaydı</div>
                      <small className="text-muted">
                        Mehmet Y. az önce katıldı.
                      </small>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center gap-2">
                    <CurrencyDollar className="text-success" />
                    <div>
                      <div className="fw-semibold">Ödeme alındı</div>
                      <small className="text-muted">
                        #TR-5421 için 1.200₺ alındı.
                      </small>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center gap-2">
                    <PencilSquare className="text-primary" />
                    <div>
                      <div className="fw-semibold">İlan güncellendi</div>
                      <small className="text-muted">
                        Mercedes C200 ilanı güncellendi.
                      </small>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center gap-2">
                    <ExclamationTriangle className="text-warning" />
                    <div>
                      <div className="fw-semibold">Şikayet bildirildi</div>
                      <small className="text-muted">
                        İlan #1234 için rapor mevcut.
                      </small>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
                <Card.Footer>
                  <Button variant="warning" className="w-100">
                    Tüm Günlüğü İncele
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanelBootstrap;
