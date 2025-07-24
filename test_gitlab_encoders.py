import unittest
from unittest.mock import Mock
from gitlab_encoders import gitlab_encoder
from gitlab.base import RESTObject
from gitlab.v4.objects import Project

class TestGitlabEncoder(unittest.TestCase):
    def test_rest_object(self):
        obj = Mock(spec=RESTObject)
        obj.asdict.return_value = {"foo": "bar"}
        self.assertEqual(gitlab_encoder(obj), {"foo": "bar"})

    def test_project(self):
        obj = Mock(spec=Project)
        obj.attributes = {"foo": "bar"}
        self.assertEqual(gitlab_encoder(obj), {"foo": "bar"})

    def test_other_object(self):
        obj = "test"
        self.assertEqual(gitlab_encoder(obj), "test")

if __name__ == '__main__':
    unittest.main()
